import React, { Component, useState, useCallback } from 'react';
import { render } from 'react-dom';
import CoverImageView from './CoverImageView';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const App = () => {
  const [showError, setShowError] = useState<boolean>(true);
  const [showLoading, setshowLoading] = useState<boolean>(false);
  const onHideError = useCallback(() => {
    setShowError(false);
    setshowLoading(true);
    setTimeout(() => {
      setshowLoading(false);
    }, 600);
  }, []);
  const onShowError = useCallback(() => {
    setShowError(true);
    setshowLoading(false);
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fafafa'
      }}
    >
      <CoverImageView
        imgSrc={
          'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
        }
      />
      {showError && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <p style={{ paddingLeft: 16, color: '#d8000c' }}>
            {'Unexpected error'}
          </p>
          <FontAwesomeIcon
            icon={faSync}
            style={{ paddingLeft: 16 }}
            onClick={onHideError}
          />
        </div>
      )}
      {showLoading && <p style={{ paddingLeft: 16 }}>Loading……</p>}
      {!showError && !showLoading && (
        <div
          style={{
            marginLeft: 32,
            marginRight: 32,
            marginTop: -100,
            backgroundColor: '#fafafa',
            borderRadius: 12,
            border: '1px solid #c8c8c8',
            padding: 16,
            display: 'flex',
            flexDirection: 'column'
          }}
          onClick={onShowError}
        >
          <h2>{'Card Title'}</h2>
          <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
        </div>
      )}
    </div>
  );
};

render(<App />, document.getElementById('root'));
