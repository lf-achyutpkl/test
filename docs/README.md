# API documentation Using Swagger 3.0.0

## Getting Started
1. [__Install Swagger Editor__](http://editor.swagger.io/)
    > If you do not want to install swagger editor, you can easily write with your favourite code editor which supports yaml file type.
    
   *  [Node JS](https://nodejs.org/en/) must be installed before installing Swagger Editor.
   *  Download latest release of swagger editor from it's [github repo](https://github.com/swagger-api/swagger-editor/releases).
   *  Deploy _swagger-editor_ folder using any http server i.e 
        ```shell
            python -m SimpleHTTPServer
        ```
        __OR__ <p>
        Installation using http-server
        ```shell
            npm install -g http-server
            https://github.com/swagger-api/swagger-editor/archive/v3.1.7.zip
            unzip swagger-editor.zip
            http-server swagger-editor
        ```

2. __Writing API Specification__ <br/>
    Learn writing your first API specification from it's [official docs](https://swagger.io/docs/specification/basic-structure/). <br/>
    You can try it even from web version of [swagger editor](http://editor.swagger.io/).
    
3.  __Swagger UI__
    * Go to the [GitHub repository](https://github.com/swagger-api/swagger-ui) of the Swagger UI project
    * Clone or download the zip file of the repository
    * Go to the folder containing the Swagger UI project in your local machine
    * Open the dist folder
    * Run the dist/index.html file on a browser or place the dist folder inside your server.

4. __Changing default API specification__ <br/>
By default, you can see Petstore API docs. To change it to your API specification follow these steps.
    * In general, to do so, you would need to pass a constructor URL of the specification you wish to make as the default. 
    * Open index.html file from dist folder and change following lines.
        ```JS
            window.swaggerUi = new SwaggerUi({
                url: 'path to yaml file' // e.g. https://raw.githubusercontent.com/lf-achyutpkl/swagger-3.0/master/api.yaml
            });
        ```
