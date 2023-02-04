# Widget Factory
Quick sample app to try out docker compose

## Directory Structure
```
├── docker-compose.yml
├── assembly (python/flask)
│   ├── assembler.py
├── back (python/flask)
│   ├── back.py
└── front (enhance)
    └── app
        ├── api
        │   └── index.mjs
        ├── elements
        │   ├── widget-button.mjs
        │   └── widget-container.mjs
        └── pages
            └── index.html
```

## How to use
```
1. git clone https://github.com/fx-wood/widget-factory
2. cd widget-factory
3. docker compose up
```
### Front
in a browser, navigate to http://localhost:3333

### Back
```curl http://localhost:8080/widget```

## TODO
Add crypto widgets
Add local widgets
Turn it into a clicker game
Deploy it