from flask_restx import Resource, Namespace
from app.api_models import uploadDocs_model
from app.extensions import db
from app.models import UploadDocs
from werkzeug.utils import secure_filename
from flask import current_app as request
import os
from app.models import Role


upload_docs_ns = Namespace("upload_docs", description="Document related operations")

ALLOWED_EXTENSIONS = {
    "txt",
    "pdf",
    "png",
    "jpg",
    "jpeg",
    "gif",
}


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@upload_docs_ns.route("/getdocs/<int:employee_id>")
class GetDocuments(Resource):
    @upload_docs_ns.marshal_with(uploadDocs_model)
    def get(self, employee_id):
        docs = UploadDocs.query.filter_by(employee_id=employee_id).all()

        if not docs:
            print("No documents found")
            return {"message": "No documents found"}, 404

        docs_list = [
            {
                "id": doc.id,
                "title": doc.title,
                "file": doc.file,
                "description": doc.description,
                "file_path": doc.file_path,
                "file_type": doc.file_type,
                "file_size": doc.file_size,
                "employee_id": doc.employee_id,
            }
            for doc in docs
        ]
        return docs_list, 200


@upload_docs_ns.route("/simpleupload")
class SimpleUpload(Resource):
    @upload_docs_ns.expect(uploadDocs_model)
    @upload_docs_ns.marshal_with(uploadDocs_model)
    def post(self):
        if "file" not in request.files:
            return {"message": "No file part"}, 400
        file = request.files["file"]

        if file.filename == "":
            return {"message": "No selected file"}, 400

        if not allowed_file(file.filename):
            return {"message": "Invalid file type or extension"}, 400

        filename = secure_filename(file.filename)
        filepath = os.path.join(current_app.config["UPLOAD_FOLDER"], filename)

        if os.path.exists(filepath):
            print("A file with this name already exists")
            return {"message": "A file with this name already exists"}, 400

        file.save(filepath)

        title = request.form.get("title")
        description = request.form.get("description")
        file_type = filename.rsplit(".", 1)[1].lower()
        file_size = os.path.getsize(filepath)
        employee_id = request.form.get("employee_id")

        role_ids = request.form.getlist("role_ids")
        roles_to_add = Role.query.filter(Role.id.in_(role_ids)).all()

        try:
            new_doc = UploadDocs(
                title=title,
                description=description,
                file=filename,
                file_type=file_type,
                file_size=file_size,
                file_path=filepath,
                employee_id=employee_id,
            )

            new_doc.roles.extend(roles_to_add)

            db.session.add(new_doc)
            db.session.commit()

            return new_doc, 201
        except Exception as e:
            return {"message": str(e)}, 500
