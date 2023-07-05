const {ProductManager}= require("./productManager");

const filePath="./productos.json";

const manager= new ProductManager(filePath);
console.log("manager",manager)

const operaciones = async()=>{
    try {
        const exists = manager.fileExist();
        console.log("exists",exists)

        const resultado = await manager.getProduct();
        console.log("resultado",resultado)

        await manager.addProduct({id:newID,title:"mouse", description:"inalambrico",price:"$400", thumbail:"sin imagen",code:1,stock:30});
        await manager.addProduct({id:newID,title:"monitor", description:"LED",price:"$5000", thumbail:"sin imagen",code:3,stock:10});

        await manager.updateProduct({id:newID,title:"mouse",description:"alambrico",price:"$5000",thumbail:"sin imagen",code:1,stock:21})

        await manager.deleteProduct({id:newID,title:"mouse"})
    } catch (error) {
        console.log(error.message)
    }

}
operaciones();