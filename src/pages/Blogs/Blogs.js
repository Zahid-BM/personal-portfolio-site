import React from 'react';
import coming from '../../resources/images/coming.png'
import PageTitle from '../shared/PageTitle/PageTitle';

const Blogs = () => {
    return (
        <>
<PageTitle title={'Blogs'} pageColor={'bg-box2'}></PageTitle>
            <img className='w-100 h-100 img-fluid' src={coming} alt="" />


        </>
    );
};

export default Blogs;