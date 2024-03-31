class ProductManager{
    constructor() {
        this.products=[];
        this.nextId= 1 ;
    }

    getProducts(){
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        const codeExists = this.products.some(product => product.code === code);
        if(codeExists){
            throw new Error("El codigo del producto ya esta en uso.");
        }

        const newProduct = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(newProduct);
    }

    getProductById(id) {
       const product = this.products.find( product=> product.id===id );
       if(!product) {
        throw new Error('Producto no encontrado.' );
    }
    return product;
    }
}

const manager = new ProductManager();

manager.addProduct("producto prueba","Este es un producto de prueba", 200, "sin Imagen", "abc123", 25);

try{
    const product = manager.getProductById(1);
    console.log("Producto encontrado: ", product);
}catch(error){
    console.error(error.message);
}
try {
    const product = manager.getProductById(999);
    console.log("Producto encontrado: ", product);
} catch (error) {
    console.error(error.message);
}

const products = manager.getProducts();
console.log(products)