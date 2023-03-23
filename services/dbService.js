import * as SQLite from 'expo-sqlite';

export function getDbConnection() {
    const cx = SQLite.openDatabase('dbPizzaria.db');
    return cx;
}

//#region Products

export async function createTableProduct() {
    return new Promise((resolve, reject) => {
        const query = `CREATE TABLE IF NOT EXISTS tbProduct
        (
            id integer primary key autoincrement,
            code text not null,
            description text not null,
            category text null,
            unitValue decimal(10,2) null      
        )`;

        let dbCx = getDbConnection();        
        
        dbCx.transaction(tx => {
            tx.executeSql(query);
            resolve(true); 
        },
            error => {
                console.log(error);
                resolve(false);
            }
        );
    });
};

export function getAllProducts() {

    return new Promise((resolve, reject) => {

        let dbCx = getDbConnection();
        dbCx.transaction(tx => {
            let query = 'select * from tbProduct';
            tx.executeSql(query, [],
                (tx, registros) => {

                    var retorno = []

                    for (let n = 0; n < registros.rows.length; n++) {
                        let obj = {
                            id: registros.rows.item(n).id,
                            code: registros.rows.item(n).code,
                            description: registros.rows.item(n).description,
                            unitValue: registros.rows.item(n).unitValue,
                            category: registros.rows.item(n).category
                        }
                        retorno.push(obj);
                    }
                    resolve(retorno);
                })
        },
            error => {
                console.log(error);
                resolve([]);
            }
        )
    }
    );
}

export function newProduct(product) {

    return new Promise((resolve, reject) => {
        let query = 'insert into tbProduct (id, code, description, unitValue, category) values (?,?,?,?,?)';
        let dbCx = getDbConnection();

        dbCx.transaction(tx => {
            tx.executeSql(query, [product.id, product.code, product.description, product.unitValue, product.category],
                (tx, resultado) => {
                    resolve(resultado.rowsAffected > 0);
                })
        },
            error => {
                console.log(error);
                resolve(false);
            }
        )
    }
    );
}

export function editProduct(product) {
    return new Promise((resolve, reject) => {
        let query = 'update tbProduct set code=?, description=?, unitValue=? category=? where id=?';
        let dbCx = getDbConnection();

        dbCx.transaction(tx => {
            tx.executeSql(query, [product.code, product.description, product.unitValue, product.category],
                (tx, resultado) => {
                    resolve(resultado.rowsAffected > 0);
                })
        },
            error => {
                console.log(error);
                resolve(false);
            }
        )
    }
    );
}

export function deleteProduct(id) {
    return new Promise((resolve, reject) => {
        let query = 'delete from tbProduct where id=?';
        let dbCx = getDbConnection();

        dbCx.transaction(tx => {
            tx.executeSql(query, [id],
                (tx, resultado) => {
                    resolve(resultado.rowsAffected > 0);
                })
        },
            error => {
                console.log('Error on delete product: ' + error);
                resolve(false);
            }
        )
    }
    );
}

//#endregion

//#region Orders



//#endregion