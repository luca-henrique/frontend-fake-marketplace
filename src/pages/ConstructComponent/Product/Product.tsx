export const Product = () => {
  return (
    <div className='c-product'>
      <img
        alt='product'
        className='c-product__img'
        src='https://klbtheme.com/grogin/wp-content/uploads/2023/12/1-12-500x500.jpg'
        width='500px'
        height='500px'
      />
      <div className='c-product__container-title'>
        <h5 className='c-product__title'>
          Great Value Rising Crust Frozen Pizza, Supreme
        </h5>
      </div>
      <div className='c-product__container-price'>
        <span className='c-product__price'>
          R$100
        </span>
      </div>
    </div>
  );
};
