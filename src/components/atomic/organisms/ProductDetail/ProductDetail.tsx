import { ProductType } from "@/types/Product";

interface ProductDetailProps {
  product: ProductType;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const { id, title, price, description, images, category } = product;

  return (
    <div style={{background:'red'}} className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>
        <h2>{title}</h2>
        <p>ID: {id}</p>
        <p>Preço: {price}</p>
        <p>Descrição: {description}</p>
        <p>Categoria: {category.name}</p>
        <p>Imagens:</p>
        <ul>
          {images.map((image, index) => (
            <li key={index}>
              <img src={image} alt={`Product Image ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;