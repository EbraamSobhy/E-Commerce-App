import React from 'react';

    function ProductDescription() {
    return (
        <div className='mt-20'>
            <div className='flex gap-3 mb-4'>
                <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Description</button>
                <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Care Guide</button>
                <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Size Guide</button>
            </div>
            <div className='flex flex-col pb-16'>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iure quam quas dicta natus ad beatae atque voluptates molestiae ab corrupti, sunt facilis voluptas quia quo expedita quod eos ullam itaque aperiam impedit sit explicabo? Impedit eius tempora error minima id ex eos illum totam aut voluptatum odio, aliquam expedita quos beatae dolorum incidunt molestias.</p>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem itaque adipisci officia vitae minus ratione quia quam nostrum neque hic, earum harum.</p>
            </div>
        </div>
    )
}

export default ProductDescription;