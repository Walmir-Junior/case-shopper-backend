# case-shopper-backend

## Descrição

  Case para o processo seletivo da shopper
  API de um simples sistema de E-comerce

## Endpoints

*### getProducts
#### metodo _GET_

Retorna uma lista de produdos

_Output_
```
  [
    {
      "id": 16,
      "name": "AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
      "price": 20.49,
      "qty_stok": 9
    },
    {
      "id": 18,
      "name": "BEBIDA ENERGÉTICA VIBE 2L",
      "price": 8.99,
      "qty_stok": 651
    } ... ]
    
```


*### createRequest
 #### metodo _POST_ 
 
 Cria um pedido, feito por um usuario
 e retorna o este pedido.
 
 precisa de um _BODY_
 
 _input_
 
 ```
  {
    "custumerName": "wal a",
    "dueDate": "2022-12-15",
    "purchasesList": [
        {
            "productId": 16,
            "productQty": 1
        },
        {
            "productId": 18,
            "productQty": 1
        }
    ]
}
      
 ```
 
 _Output_
 
```
  {
    "id": "54b5c908-9858-483a-9708-11eccb2778d8",
    "custumerName": "wal a",
    "dueDate": "2022-12-15",
    "purchasesList": [
      {
        "productId": 16,
        "productQty": 1
      },
      {
        "productId": 18,
        "productQty": 1
      }
    ]
  }

``` 

## Tecnologias e Libs

  * Typescript
  * Axios
  * Express
  * Node JS
  * uuid
  

