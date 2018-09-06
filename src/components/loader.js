import React, { Component } from 'react';

const loader = () =>  <div className="tbgwrap">
        <div className="content">

        <div className="pulse"></div>
            <div className="pulse-center">
                  {localStorage.getItem('role') === 'passenger' ?
                    <img src="/assets/women.jpg" title="tphoto" alt="Tinder Photo" width="100%" heigth="100%" /> :
                    <img src="/assets/man.jpg" title="tphoto" alt="Tinder Photo" width="100%" heigth="100%"/>
                  }
	    </div>
        </div>
    </div>;

export default loader;
