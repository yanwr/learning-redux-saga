import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { ACTIONS } from './store/actions';
import InputComponent from '../../components/Input';

function SearchPage({ loadGiphys, loading, giphys }) {

    async function handleOnChange(value) {
        if(value.trim() !== ''){
            loadGiphys(value);
        } else {
            loadGiphys('');
        }
    };

    const Giyphys = lazy(() => import('../../components/GiphysList'));

    return (
        <>
            <InputComponent onChange={(e) => handleOnChange(e.target.value)} />
            <Suspense
                fallback={<div> LOADING GIPHYS ...</div>}
            >
                <Giyphys giphys={giphys} />
            </Suspense>
        </>
    );
};

const mapStateToProps = ({ searchState }) => ({
    giphys: searchState.giphys,
    loading: searchState.loading
});

const mapDispatchToProps = {
    loadGiphys: ACTIONS.loadGiphys
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);