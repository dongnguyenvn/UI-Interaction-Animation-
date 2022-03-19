import { useParams } from 'react-router-dom'
import products from '../data/products'
import NotFound from './NotFound'

const ProductDetailPage = () => {
    const { productId } = useParams<'productId'>()
    const product = products.find(({ id }) => id === productId)
    if (!product) return <NotFound />
    return (
        <div className='banner'>
            <div className='inner-banner'>
                <div className='container fluid'>
                    <h1 className='main-headline'>{product?.title}</h1>
                    <img className='image' src={product?.img} alt='' />
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage
