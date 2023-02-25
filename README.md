# Estado metro Santiago

Aplicación que hace uso de la [API Red](https://xor.cl/api/red/) que entrega información de distintos servicios relacionados al metro de Santiago.

#### URL

```https://api.xor.cl/red/metro-network```

#### Formato

- raiz
    - api_status: (string) Es OK si la API está funcionando.
    - issues: (boolean) Es true si el campo issues de algúna línea es true. En caso contrario, es false.
    - lines: (list) Recopila la lista de líneas publicadas. Una línea posee los siguientes campos:
        - name: (string) Nombre en español de la línea.
        - id: (string) Código de la línea. Compuesto por una L y el número de la línea.
        - issues: (boolean) Es true si el campo issues de algúna estación es true. En caso contrario, es false.
        - stations: (list) Recopila la lista de estaciones de la línea. Una estación posee los siguientes campos:
            - name: (string) Nombre en español de la estación.
            - id: (string) Código de la estación. Versión en minúscula y sin espacios ni tildes del nombre de la estación.
            - status: (string) Define el estado de la estación. Los códigos se definen más abajo.
            - lines: (list) Lista de IDs de líneas a las cuales está conectada esta estación.
            - description (string) Descripción del estado de la línea.
            - reason (string) Cuando status es distinto de cero, da más detalles sobre el estado de la línea.

#### Códigos de estado

- 0: Estación operativa
- 1: Estación temporalmente cerrada
- 2: Estación no habilitada
- 3: Estación con accesos cerrados
