import webapp2
from google.appengine.api import users
from google.appengine.ext import ndb
from google.appengine.api import app_identity
from google.appengine.api import images
from google.appengine.ext import blobstore
import cloudstorage
import mimetypes
import json
import os
import jinja2

from models import Empresa
from models import Alimento
from models import Fruta, Verdura, Postre

jinja_env = jinja2.Environment(
 loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))


class DemoClass(object):
 pass

def MyClass(obj):
 return obj.__dict__

###########################################################################     


class UpHandler(webapp2.RequestHandler):
    def _get_urls_for(self, file_name):
        
     bucket_name = app_identity.get_default_gcs_bucket_name()
     path = os.path.join('/', bucket_name, file_name)
     real_path = '/gs' + path
     key = blobstore.create_gs_key(real_path)
     try:
      url = images.get_serving_url(key, size=0)
     except images.TransformationError, images.NotImageError:
      url = "http://storage.googleapis.com{}".format(path)

     return url


    def post(self):
     self.response.headers.add_header('Access-Control-Allow-Origin', '*')
     self.response.headers['Content-Type'] = 'application/json'

     bucket_name = app_identity.get_default_gcs_bucket_name()
     uploaded_file = self.request.POST.get('uploaded_file')
     file_name = getattr(uploaded_file, 'filename', None)
     file_content = getattr(uploaded_file, 'file', None)
     real_path = ''

     if file_name and file_content:
      content_t = mimetypes.guess_type(file_name)[0]
      real_path = os.path.join('/', bucket_name, file_name)

      with cloudstorage.open(real_path, 'w', content_type=content_t,
       options={'x-goog-acl': 'public-read'}) as f:
       f.write(file_content.read())

      key = self._get_urls_for(file_name)
      self.response.write(key)


class LoginHandler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('login2.html', template_context))

   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context)

class GetAlimentosHandler(webapp2.RequestHandler):

    def get(self):
     self.response.headers.add_header('Access-Control-Allow-Origin', '*')
     self.response.headers['Content-Type'] = 'application/json'

     id_empresa = self.request.get('empresa')
     objemp = Empresa.query(Empresa.codigo_empresa == id_empresa).get()
     strKey = objemp.key.urlsafe() 
     myEmpKey = ndb.Key(urlsafe=strKey) 
     myAlimentos = Alimento.query(Alimento.empresa_key == myEmpKey)

     myList = []
     for i in myAlimentos:
      myObj = DemoClass()
      myObj.title = i.title
      myObj.description = i.description
      myObj.urlImage = i.urlImage
      myList.append(myObj)
       
     json_string = json.dumps(myList, default=MyClass)
     self.response.write(json_string)


class AlimentoHandler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('alimento.html', template_context))

   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context)

class GetFrutasHandler(webapp2.RequestHandler):

    def get(self):
     self.response.headers.add_header('Access-Control-Allow-Origin', '*')
     self.response.headers['Content-Type'] = 'application/json'

     id_empresa = self.request.get('empresa')
     objemp = Empresa.query(Empresa.codigo_empresa == id_empresa).get()
     strKey = objemp.key.urlsafe() 
     myEmpKey = ndb.Key(urlsafe=strKey) 
     myFrutas = Fruta.query(Fruta.empresa_key == myEmpKey)

     myList = []
     for i in myFrutas:
      myObj = DemoClass()
      myObj.title = i.title
      myObj.description = i.description
      myObj.urlImage = i.urlImage
      myList.append(myObj)
       
     json_string = json.dumps(myList, default=MyClass)
     self.response.write(json_string)


class FrutaHandler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('fruta.html', template_context))

   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context)

class GetVerdurasHandler(webapp2.RequestHandler):

   def get(self):
     self.response.headers.add_header('Access-Control-Allow-Origin', '*')
     self.response.headers['Content-Type'] = 'application/json'

     id_empresa = self.request.get('empresa')
     objemp = Empresa.query(Empresa.codigo_empresa == id_empresa).get()
     strKey = objemp.key.urlsafe() 
     myEmpKey = ndb.Key(urlsafe=strKey) 
     myVerduras = Verdura.query(Verdura.empresa_key == myEmpKey)

     myList = []
     for i in myVerduras:
      myObj = DemoClass()
      myObj.title = i.title
      myObj.description = i.description
      myObj.urlImage = i.urlImage
      myList.append(myObj)
       
     json_string = json.dumps(myList, default=MyClass)
     self.response.write(json_string)


class VerduraHandler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('verdura.html', template_context))

   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context)

class GetPostresHandler(webapp2.RequestHandler):

    def get(self):
     self.response.headers.add_header('Access-Control-Allow-Origin', '*')
     self.response.headers['Content-Type'] = 'application/json'

     id_empresa = self.request.get('empresa')
     objemp = Empresa.query(Empresa.codigo_empresa == id_empresa).get()
     strKey = objemp.key.urlsafe() 
     myEmpKey = ndb.Key(urlsafe=strKey) 
     myPostres = Postre.query(Postre.empresa_key == myEmpKey)

     myList = []
     for i in myPostres:
      myObj = DemoClass()
      myObj.title = i.title
      myObj.description = i.description
      myObj.urlImage = i.urlImage
      myList.append(myObj)
       
     json_string = json.dumps(myList, default=MyClass)
     self.response.write(json_string)


class PostreHandler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('postre.html', template_context))

   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context)

class MainHandler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('index.html', template_context))


   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context)

class MenuHandler(webapp2.RequestHandler):

   def get(self):

    template_context = {}
    self.response.out.write(
      self._render_template('menu.html', template_context))

   def _render_template(self, template_name, context=None):
    if context is None:
     context = {}

    template = jinja_env.get_template(template_name)
    return template.render(context)    

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/login', LoginHandler),
    ('/up', UpHandler),
    ('/alimentos', AlimentoHandler),
    ('/getAlimentos', GetAlimentosHandler),
    ('/frutas', FrutaHandler),
    ('/getFrutas', GetFrutasHandler),
    ('/verduras', VerduraHandler),
    ('/getVerduras', GetVerdurasHandler),
    ('/postres', PostreHandler),
    ('/getPostres', GetPostresHandler),
    ('/menu', MenuHandler)
], debug = True)
