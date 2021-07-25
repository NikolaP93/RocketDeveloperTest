import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import useSpaceXContext from '../../modules/hooks/useSpaceXData';

const Loader = () => {
    const ctx = useSpaceXContext();

    return <Spinner visible={ctx.state.loading} overlayColor="rgba(0,0,0,0.2)" />;
};

export default Loader;
