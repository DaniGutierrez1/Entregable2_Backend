class productManager{
    constructor(){
        this.productos=[];
        
    }

    addProduct(title,description,price,thumbnail,code,stock){
        let newID;
        
        if (!this.productos.length){
            newID=1;
            
        }else{
            newID = this.productos[this.productos.length-1].id+1
            
        }

        const nuevoProducto={
            id:newID,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            
        };
        this.productos.push(nuevoProducto);
        console.log('Nuevo producto', nuevoProducto);

     /*    const codeCheck = this.productos.id;
        const codeExist = codeCheck.some((elm)=>elm ===this.productos.code);
        if(codeExist){
            console.log("Este codigo ya fue usado")
        }else{
            this.productos.id.push(code);
        } */
        
    }

    getProducts(){
        return this.productos
    }
    getProductById(idProducto){
        const idExist = this.productos.some((producto)=>{return producto.id === idProducto}) //usar find
        if(!idExist){
            console.log('Not found')
        }else{
            const localizacionProducto = this.productos.filter((producto)=>{return producto.id === idProducto})
            console.log("El producto con ese ID es", localizacionProducto);
             
        }
    }
    updateProduct(idProducto,newDescription){
        const refreshProduct=this.productos.splice(idProducto-1,1,({description:newDescription}))
        console.log("refreshProduct",refreshProduct)
        
    }

    deleteProduct(idProducto){
         const productoEliminado=this.productos.slice(idProducto-1,1)
         console.log(this.productos)
         console.log("El producto",productoEliminado, "ha sido eliminado")
      /*    const eliminarProducto=this.productos.find((producto)=>{return producto.id===idProducto})
         if(eliminarProducto){
             const eliminado= eliminarProducto.splice
         }
        
         console.log(eliminarProducto); */
    }
}

const AdminManager = new productManager()
console.log("productos en tienda", AdminManager)

const productosTienda = AdminManager.getProducts()
console.log('Los productos son', productosTienda);

AdminManager.addProduct("control","inalambrico por dongle","$50000","htpp","2","2")
AdminManager.addProduct("monitor","IPS","$30000","htpp","2","4")

AdminManager.getProductById(2);

AdminManager.updateProduct(1,"alambrico")

AdminManager.deleteProduct(1);