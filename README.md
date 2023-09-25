# Django REST Framework y React CRUD

## Tutorial https://www.youtube.com/@FaztCode

## Software:
* python 3.8
* node V20.7.0 (docker node:20.7.0-bookworm)
* Django 4.2.5
* Django Rest Framework (DRF) 3.14.0


# Working on
```

export APP_ROOT="<BASE_DIR>/DRF/django-react-crud"
mkdir -p "$APP_ROOT"
cd "$APP_ROOT"

code --user-data-dir "$APP_ROOT"/udd-django-isolated \
    --extensions-dir "$APP_ROOT"/exd-django-isolated \
    "$APP_ROOT"/src



```

# Node on docker
```

docker run -it --rm -p 8080:8080 -p 5173:5173 -d --name nodejsdocker \
    -v "$APP_ROOT"/src/client:/app/client \
    node:20.7.0-bookworm

docker exec -it -u node nodejsdocker bash

node@ab89b2886cd0:/$ cd /app/client

node@9626aa7b3d40:/app/client$ npm run dev

# detener docker
mherrera@ub18nb04:~ $ docker stop nodejsdocker 

```


