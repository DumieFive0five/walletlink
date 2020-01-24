// Copyright (c) 2018-2020 Coinbase, Inc. <https://coinbase.com/>
// Licensed under the Apache License, version 2.0

export default `.-walletlink-snackbar{position:fixed;right:0;top:0;z-index:2147483647}.-walletlink-snackbar-item{background-color:#fff;border-radius:16px;box-shadow:0px 16px 24px rgba(0,0,0,.06),0px 0px 8px rgba(0,0,0,.04);display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:hidden;text-align:left;transition:opacity .25s,transform .25s}.-walletlink-snackbar-item-content{align-items:center;cursor:pointer;display:flex;flex-direction:row;padding:8px 8px 8px 16px;user-select:none}.-walletlink-snackbar-item-content-message{color:#000;font-family:-apple-system,BlinkMacSystemFont,"Lucida Grande","Lucida Sans","Helvetica Neue",Arial,sans-serif;line-height:1.5}.-walletlink-snackbar-item-content-chevron{display:block;margin-left:8;transition:transform .05s}.-walletlink-snackbar-item-progress-bar{display:block;height:2px;position:relative}.-walletlink-snackbar-item-progress-bar::before{animation:-walletlink-snackbar-progressbar 2s linear infinite;background-image:linear-gradient(to right, rgba(22, 82, 240, 0) 0%, #1652f0 100%);content:"";height:100%;left:-100%;position:absolute;width:100%}.-walletlink-snackbar-item-actions-item{margin:8px 0}.-walletlink-snackbar-item-actions-item-info{color:#888;margin:0 8px 0 0}.-walletlink-snackbar-item-actions-item-button{-webkit-appearance:none;-webkit-text-fill-color:#1652f0;background:#fff;color:#1652f0;cursor:pointer;display:inline;margin:0;padding:0;transition:opacity .25s}.-walletlink-snackbar-item-actions-item-button:active{opacity:.6}@keyframes -walletlink-snackbar-progressbar{0%{left:0;width:0%;background-image:linear-gradient(to right, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}25%{left:0;width:100%}50%{left:100%;width:0%;background-image:linear-gradient(to right, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}50.01%{background-image:linear-gradient(to left, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}75%{left:0;width:100%}100%{left:0;width:0%;background-image:linear-gradient(to left, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}}`
