import os
from flask import Flask
import pymysql
from flask_cors import CORS
from app.resources import ns, Login, Signup
from app.times_resources import times_ns, RegTimes, GetTimes
from app.extensions import db, api
from flask_migrate import Migrate
from dotenv import load_dotenv
from app.uploadDocs_resources import upload_docs_ns

load_dotenv()

pymysql.install_as_MySQLdb()
migrate = Migrate()
environment_configuration = os.environ["CONFIGURATION_SETUP"]
UPLOAD_FOLDER = "C:/Users/eriks/Skrivbord/uploads"


def create_app(config_class=environment_configuration):
    app = Flask(__name__)
    app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
    CORS(app)

    app.config.from_object(config_class)
    api.init_app(app)
    db.init_app(app)
    migrate.init_app(app, db)
    api.add_namespace(ns)
    api.add_namespace(times_ns)
    api.add_namespace(upload_docs_ns)
    api.add_resource(Login, "/auth/login")
    api.add_resource(Signup, "/auth/signup")
    api.add_resource(RegTimes, "/times")
    api.add_resource(GetTimes, "/gettimes/<int:employee_id>")

    return app
