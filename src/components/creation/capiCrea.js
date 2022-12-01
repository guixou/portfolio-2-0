import React from 'react';
import Site from '../../assets/site/CapiCrea/index.html';
import html from '../../assets/site/CapiCrea/index.html';

function capiCrea() {
    return (
        <div className='description'>
            <h4>Capi Creative</h4>
            <p>Pub pour une ablication de trading/cryptoactif</p>
            <p>Site/PUB fictive, défi intégration en moins d'une jourée réussi</p>
            <a href={Site} target="_blank">Visiter le site</a>
        </div>
    );
}

export default capiCrea;