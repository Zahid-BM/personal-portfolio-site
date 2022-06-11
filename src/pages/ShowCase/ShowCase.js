import React from 'react';
import coming from '../../resources/images/coming.png';
import PageTitle from '../shared/PageTitle/PageTitle';

const ShowCase = () => {
    return (
        <>
            <PageTitle title={'Showcase'} pageColor={'bg-box2'}></PageTitle>
            <img className='w-100 h-100 img-fluid' src={coming} alt="" />
        </>
    );
};

export default ShowCase;