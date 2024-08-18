import { Rating } from '@mui/material';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Fragment, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { id, image, title, price, rating, description } = product;
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const navigate = useNavigate();

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSingleProduct = (id) => {
        navigate(`/singleProduct/${id}`);
    }

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col relative">
            {/* Product Image */}
            <div className=''>
                <img src={image} alt={title} className="w-full h-56 object-cover" />
            </div>

            {/* Product Details */}
            <div className="p-4">
                <div className='mb-28'>
                    {/* Product Name */}
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                </div>
                <div className='absolute bottom-4 left-4 right-4'>
                    <div className='flex justify-between items-center h-10'>
                        {/* Product Price */}
                        <div>
                            <span className="text-xl font-bold text-indigo-600">${price}</span>
                        </div>
                        <div>
                            <div>
                                <Rating name="read-only" value={rating.rate} readOnly />
                            </div>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors duration-300">
                        <div className='' onClick={handleClickOpen('paper')}> <div className='text-white font-bold text-md'>View Details</div> </div>

                        <Fragment>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                scroll={scroll}
                                aria-labelledby="scroll-dialog-title"
                                aria-describedby="scroll-dialog-description"
                            >
                                <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
                                {/* Product Image */}
                                <div className='p-4'>
                                    <img src={image} alt={title} className="w-full h-full" />
                                </div>
                                <div className='p-4'>
                                    {description}
                                </div>

                                <DialogActions>
                                    <div className='cursor-pointer font-semibold text-blue-500 mr-5' onClick={handleClose}>Cancel</div>
                                    <div className='cursor-pointer font-bold text-blue-500' onClick={()=>handleSingleProduct(id)}>${price}</div>
                                </DialogActions>
                            </Dialog>
                        </Fragment>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

ProductCard.propTypes = {
    product: PropTypes.object,
}