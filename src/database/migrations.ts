import BaseDatabase from "./BaseDatabase";
import products from "./products.json"
import { PRODUCTS_LIST, PRODUCTS_REQUESTS, REQUESTS } from "./TableNames";

export class Migrations extends BaseDatabase {
    
    createTables = async () => {
        await BaseDatabase.connection.raw(`

            DROP TABLE IF EXISTS ${PRODUCTS_LIST}, ${REQUESTS}, ${PRODUCTS_REQUESTS};

             CREATE TABLE IF NOT EXISTS ${PRODUCTS_LIST}(
                id INT PRIMARY KEY,
                name VARCHAR(255) UNIQUE NOT NULL,
                price FLOAT NOT NULL,
                qty_stok INT NOT NULL
            );

             CREATE TABLE IF NOT EXISTS ${REQUESTS}(
                id VARCHAR(255) NOT NULL PRIMARY KEY,
                custumerName VARCHAR(50) NOT NULL,
                dueDate DATE NOT NULL
            );

             CREATE TABLE IF NOT EXISTS ${PRODUCTS_REQUESTS}(
                productId INT NOT NULL,
                requestId VARCHAR(255) NOT NULL,
                productQty INT NOT NULL,
                FOREIGN KEY (productId) REFERENCES ${PRODUCTS_LIST}(id),
                FOREIGN KEY (requestId) REFERENCES ${REQUESTS}(id)
            );
        `)
        .then(() => {
            console.log(`Tables created successfully!`)
            this.insertData()
        })
        .catch((error: any) => {this.printError(error)})
    }

    insertData = async () => {
        try {
            await BaseDatabase.connection(PRODUCTS_LIST)
                .insert(products)
                .then(() => console.log(`${PRODUCTS_LIST} populated!`))
                .catch((error: any) => this.printError(error))

        } catch (error: any) {
            console.log(error.sqlMessage || error.message)
        } finally {
            console.log("Ending BaseDatabase.connection!")

            return BaseDatabase.connection.destroy()
        }
    }

    printError = (error: any) => {
        console.log(error.sqlMessage || error.message)
    }

}

const migrations = new Migrations()
migrations.createTables()


