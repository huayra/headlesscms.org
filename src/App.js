import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Header from './Header'
import Footer from './Footer'
import Routes from 'react-static-routes'

injectGlobal`
  * {
    box-sizing: border-box;
    text-size-adjust: none;
  }

  body {
    margin: 0;
    font-family: 'Roboto', 'sans-serif';
    font-size: 16px;
    line-height: 1.6;
    color: #444;
    background: #fbfbfb;
  }
`

const AppStyles = styled.div`
  .notification {
    background: #5f90ff;
    box-sizing: border-box;
    color: white;
    padding: 16px 24px;
    position: relative;
    text-align: center;
    width: 100%;

    em {
      font-style: normal;
      color: rgba(255,255,255,0.2);
      padding: 0 8px;
    }

    .text-link {
      color: #313D3E;
      font-weight: bold;
      text-decoration: underline;
    }
  }

  * {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
            box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'sans-serif';
    font-size: 16px;
    line-height: 1.6;
    color: #444;
    margin: 0 0;
    background: #fbfbfb;
  }
  h3 {
    font-size: 20px;
    line-height: 1.2;
  }
  h4 { font-size: 31px; }
  h5 { font-size: 29px; }
  h7 {
    font-size: 14px;
    font-weight: bold;
  }

  small { font-size: 66.67%; }

  dl {
    overflow: hidden;
    margin: 6px 0 0;
    padding: 0;
  }
  dl dt, dl dd { margin: 0; }
  dl dt {
    clear: left;
  }

  h2 a, h2 a:link, h2 a:visited, h2 a:active, h2 a:hover {
  /*  color: #66666f;*/
    text-decoration: none;
  }
  a:visited {
    outline: none;
  }
  h2 a:hover {
    text-decoration: underline;
  }

  pre {
    background: #122b3b;
    padding: 10px 20px;
    border: 1px solid #000;
  }

  .logo {
    font-family: 'Roboto Slab', 'serif';
  }

  .hero {
    background: #FF5F6D;
    background: -webkit-linear-gradient(-45deg, #FF5F6D , #FFC371);
    background: linear-gradient(-45deg, #FF5F6D , #FFC371);
    background-size: cover;
    text-align: center;
    padding: 29px 0;
  }
  .hero h1 {
    margin: 31px 0 0;
  }
  .hero h1 img {
    height: auto;
    width: 400px;
    max-width: 80%;
    margin: 0 auto;
  }
  .hero h2 {
    margin: 0 auto 40px auto;
    color: #313D3E;
    max-width: 660px;
    line-height: 36px;
    font-weight: 100;
    font-size: 24px;
  }
  .hero a.logo, .hero a.logo:link, .hero a.logo:active, .hero a.logo:hover {
    color: #fff;
    text-decoration: none;
  }

  .staticgen-promo a,
  .text a {
    color: #5f90ff;
    text-decoration: none;

    &:link,
    &:active,
    &:hover {
      color: #5f90ff;
      text-decoration: none;
    }
  }

  .staticgen-promo a {
    display: block;
  }

  .navbar {
    height: 45px;
    background: #313D3E;
    overflow: hidden;
    z-index: 100;
  }

  .menu.right {
    text-align: right;
  }

  .menu > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .menu > ul > li {
    display: inline-block;
    line-height: 45px;
    height: 45px;
  }

  .menu > ul > li > a {
    display: inline-block;
    line-height: 45px;
    height: 45px;
    color: #fff;
    text-decoration: none;
    font-weight: normal;
    margin-left: 16px;
  }

  .menu > ul > li > a:hover {
    color: #5f90ff;
  }

  .main, .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .main {
    margin-top: 47px;
  }

  .main:after {
    content: ' ';
    width: 100%;
    display: table;
  }

  .sheet {
    padding: 12px 47px 47px;
  }
  .sheet h1 {
      margin: 0 0 20px;
      border-bottom: 1px solid #444;
  }
  .links a {
      text-decoration: none;
      color: #666;
  }
  .links a:hover {
      color: #222;
  }
  .sheet .links {
      margin-bottom: 45px;
  }
  .sheet p {
      margin: 0 0 16px;
  }
  .separator {
      margin: 0 9px;
      color: #999;
      font-weight: 100;
  }
  .sheet .links .fa {
      margin-right: 4px;
  }
  .sheet h3 {
    margin: 18px 0 0;
  }
  .sheet h4 {
    margin: 12px 0 0;
    line-height: 1.2;
  }
  .sheet ol, .sheet ul {
    padding: 0 0 0 20px;
  }
  .sheet ol ol, .sheet ol ul, .sheet ul ol, .sheet ul ul {
    margin-top: 12px;
    padding-left: 20px;
  }
  .sheet li {
    margin-bottom: 0;
  }
  .sheet h3 + ul { margin-top: 0; }
  .sheet img {
    margin: 18px 0;
    width: 100%;
    border: none;
    box-shadow: 0 0 7px rgba(0,0,0,.2);
  }

  .projects, .stats, .trends {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .projects {
    margin-right: -24px;
  }

  .photos-inside {
    margin-bottom: -4px;
    float: right;
  }

  .project.google-drive-cms h4, .project.kentico-cloud h4 {
    font-size: 24px;
    margin-top: 7px;
  }
  .cards-header {
    display: none;
  }
  .show-headers .cards-header {
    display: block;
    width: 100%;
    padding: 24px 0;
    font-size: 36px;
    clear: both;
  }
  .show-headers .cards-header:after {
    clear: both;
    content: "";
    display: block;
  }
  .card {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    color: #313D3E;
    display: block;
    font-size: 14px;
    margin: 0 0 18px;
    padding: 18px;
    text-decoration: none;

    ul {
      padding: 10px 0 8px 20px;
    }

    .type {
      display: inline;

      + h7 {
        display: block;
        margin-top: 8px;
      }
    }

    &:visited,
    &:active,
    &:hover {
      color: #313D3E;
      text-decoration: none;
    }

    .url {
      font-style: italic;
      font-weight: normal;
      color: #999;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .card .title {
    margin: 0 -18px 0px;
    padding: 0 18px 6px;
    font-weight: normal;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .hidden {
    display: none;
  }

  .tag {
    background: #5f90ff;
    border-radius: 3px;
    color: white;
    display: inline-block;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 12px;
    margin: 0 auto;
    padding: 6px 5px 4px 7px;
    text-transform: uppercase;

    &.proprietary {
      background: #fff;
    }
  }

  .card .description {
    margin: 40px 0 30px 0;
    min-height: 66px;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;

    &.too-long {
      max-height: 66px;
      overflow: hidden;
      position: relative;
      text-align: justify;

      &:before {
        background: white;
        bottom: 0;
        content: '...';
        position: absolute;
        right: 0;
      }
    }
  }

  .stats {
    overflow: hidden;
    margin: 16px -18px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .stat, .trend {
    display: block;
  }
  .stat {
    font-size: 18px;
    margin: 2px 0 1px;
    -webkit-font-smoothing: antialiased;
  }
  .trend.up {
    color: #31BB47;
  }
  .trend.down {
    color: #C91B1B;
  }
  .stats li, .trends li {
    float: left;
    width: 33.33333333%;
    text-align: center;
    margin: 0;
    padding: 6px;
    line-height: 1.4;
  }

  .projects-sort-filter-toolbar {
    margin-bottom: 47px;
  }

  .projects-sort-filter-toolbar:after {
    clear: both;
    content: "";
    display: block;
  }

  .projects-filters {
    float: left;
  }

  .projects-sort {
    float: right;
  }

  .landing .staticgen-promo {
    margin: 0;
  }

  .landing .staticgen-promo h3 {
    font-size: 24px;
    line-height: 30px;
    margin: 26px 0 16px 0;
  }

  .landing .staticgen-promo p {
    font-size: 14px;
  }

  .deploy-to-netlify {
    margin: 64px 0;
  }

  .deploy-to-netlify hr {
    color: #fefefe;
    border-top: 1px solid #fefefe;
    margin-bottom: 30px;
  }

  .deploy-to-netlify h3,
  .deploy-to-netlify p {
    margin-bottom: 24px;
  }

  .deploy-to-netlify em {
    color: grey;
    display: block;
    font-style: italic;
    font-size: 12px;
    margin-bottom: 10px;
  }

  .primary-btn {
    background: #5f90ff;
    border-radius: 4px;
    border: none;
    color: white;
    font-weight: regular;
    padding: 16px 24px;
  }

  .deploy {
    display: block;
    margin: 22px 0 0 0;
  }

  a.deploy-btn {
    min-height: 43px;
    width: 100%;
  }

  a.deploy-btn img {
    width: 100%;
  }

  a.deploy-btn-interior img {
    margin: -4px 0 0 0;
    box-shadow: none;
    width: auto;
  }

  .sheet:after {
    content: "";
    display: table;
    clear: both;
  }

  .footer {
    background: #B6B6B6;
    margin: 46px 0 0;
    padding: 46px 46px 23px;
  }

  .footer-container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .postscript {
    color: #eee;
    font-size: 12px;
    text-align: center;
    margin-top: 46px;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
  }
  .postscript a, .postscript a:visited, .postscript a:link, .postscript a:active, .postscript a:hover {
    color: #fff;
    font-weight: bold;
  }
  .postscript a:hover {
    text-decoration: underline;
  }

  .footer h3 {
    color: white;
    font-weight: 100;
    font-size: 29px;
    text-align: center;
  }
  .footer h3 a, .footer h3 a:visited, .footer h3 a:active, .footer h3 a:hover {
    font-weight: normal;
    color: white;
    text-decoration: none;
  }
  .footer h3 a:hover {
    text-decoration: underline;
  }

  /* Awesome dropdown design from this Codepen: http://codepen.io/Thibaut/pen/Jasci */

  .dropdown {
    display: inline-block;
    position: relative;
    overflow: hidden;
    height: 28px;
    width: 150px;
    background: #f2f2f2;
    border: 1px solid;
    border-color: white #f7f7f7 whitesmoke;
    border-radius: 3px;
    background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06));
    background-image: -moz-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06));
    background-image: -o-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06));
    background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.06));
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  }

  .navbar .dropdown {
    margin-top: 6px;
    margin-right: 12px;
  }

  .dropdown:before, .dropdown:after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 9px;
    right: 10px;
    width: 0;
    height: 0;
    border: 4px dashed;
    border-color: #888888 transparent;
    pointer-events: none;
  }

  .dropdown:before {
    border-bottom-style: solid;
    border-top: none;
  }

  .dropdown:after {
    margin-top: 7px;
    border-top-style: solid;
    border-bottom: none;
  }

  .dropdown-select {
    position: relative;
    width: 130%;
    margin: 0;
    padding: 6px 8px 6px 10px;
    height: 28px;
    line-height: 14px;
    font-size: 12px;
    color: #62717a;
    text-shadow: 0 1px white;
    background: #f2f2f2; /* Fallback for IE 8 */
    background: rgba(0, 0, 0, 0) !important; /* "transparent" doesn't work with Opera */
    border: 0;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 0.01px; /* Fix select appearance on Firefox https://gist.github.com/joaocunha/6273016/ */
    text-overflow: '';
  }

  .dropdown-select:focus {
    z-index: 3;
    width: 100%;
    color: #394349;
    outline: none;
  }

  .dropdown-select > option {
    margin: 3px;
    padding: 6px 8px;
    text-shadow: none;
    background: #f2f2f2;
    border-radius: 3px;
    cursor: pointer;
  }

  /* Fix for IE 8 putting the arrows behind the select element. */

  .lt-ie9 .dropdown {
    z-index: 1;
  }

  .lt-ie9 .dropdown-select {
    z-index: -1;
  }

  .lt-ie9 .dropdown-select:focus {
    z-index: 3;
  }

  /* Dirty fix for Firefox adding padding where it shouldn't. */

  @-moz-document url-prefix() {
    .dropdown-select {
      padding-left: 6px;
    }
  }

  .dropdown-dark {
    background: #444;
    border-color: #111111 #0a0a0a black;
    background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.4));
    background-image: -moz-linear-gradient(top, transparent, rgba(0, 0, 0, 0.4));
    background-image: -o-linear-gradient(top, transparent, rgba(0, 0, 0, 0.4));
    background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.4));
    -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.1), 0 1px 1px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 1px rgba(255, 255, 255, 0.1), 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  .dropdown-dark:before {
    border-bottom-color: #aaa;
  }

  .dropdown-dark:after {
    border-top-color: #aaa;
  }

  .dropdown-dark .dropdown-select {
    color: #aaa;
    text-shadow: 0 1px black;
    background: #444;  /* Fallback for IE 8 */
  }

  .dropdown-dark .dropdown-select:focus {
    color: #ccc;
  }

  .dropdown-dark .dropdown-select > option {
    background: #444;
    text-shadow: 0 1px rgba(0, 0, 0, 0.4);
  }

  .share-button {
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin-bottom: 24px;

    .entypo-twitter {
      background: #6cdfea url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMjAgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+dHdpdHRlcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJ0d2l0dGVyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iVHdpdHRlciI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTcuMzE2LDQuMjQ2IEMxNy4zMjQsNC40MDggMTcuMzI3LDQuNTcyIDE3LjMyNyw0LjczNCBDMTcuMzI3LDkuNzI0IDEzLjUzLDE1LjQ3NiA2LjU4NywxNS40NzYgQzQuNDU0LDE1LjQ3NiAyLjQ3MSwxNC44NTEgMC44LDEzLjc3OSBDMS4wOTYsMTMuODE0IDEuMzk2LDEzLjgzMiAxLjcsMTMuODMyIEMzLjQ3LDEzLjgzMiA1LjA5NywxMy4yMjggNi4zODgsMTIuMjE3IEM0LjczNywxMi4xODYgMy4zNDIsMTEuMDk2IDIuODYyLDkuNTk2IEMzLjA5Miw5LjYzOSAzLjMyOSw5LjY2MiAzLjU3Miw5LjY2MiBDMy45MTcsOS42NjIgNC4yNTEsOS42MTcgNC41NjcsOS41MzEgQzIuODQsOS4xODMgMS41MzksNy42NTggMS41MzksNS44MjggTDEuNTM5LDUuNzgxIEMyLjA0OCw2LjA2NCAyLjYzMSw2LjIzNCAzLjI0OSw2LjI1NCBDMi4yMzYsNS41NzYgMS41NjksNC40MjIgMS41NjksMy4xMTEgQzEuNTY5LDIuNDIgMS43NTUsMS43NzEgMi4wODEsMS4yMTMgQzMuOTQyLDMuNDk4IDYuNzI1LDUgOS44NjIsNS4xNTggQzkuNzk4LDQuODgxIDkuNzY1LDQuNTk0IDkuNzY1LDQuMjk3IEM5Ljc2NSwyLjIxMyAxMS40NTQsMC41MjQgMTMuNTM5LDAuNTI0IEMxNC42MjUsMC41MjQgMTUuNjA2LDAuOTgxIDE2LjI5NSwxLjcxNSBDMTcuMTU0LDEuNTQ1IDE3Ljk2MiwxLjIzMSAxOC42OTIsMC43OTkgQzE4LjQxLDEuNjggMTcuODExLDIuNDIgMTcuMDMyLDIuODg3IEMxNy43OTYsMi43OTUgMTguNTIyLDIuNTk0IDE5LjIsMi4yOTMgQzE4LjY5NCwzLjA1MSAxOC4wNTQsMy43MTUgMTcuMzE2LDQuMjQ2IFoiIGlkPSJ0d2l0dGVyIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==) center no-repeat !important;
    }

    .entypo-facebook {
      background: #3b5998 url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMTggMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+ZmFjZWJvb2s8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZmFjZWJvb2std2l0aC1jaXJjbGUiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iRmFjZWJvb2tfd194MkZfX2NpcmNsZSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTcuNTgsNS45MTU2IEwxMi43Nyw1LjkxNTYgQzEyLjIsNS45MTU2IDExLjU2NjY2NjcsNi42ODA2IDExLjU2NjY2NjcsNy42OTcyIEwxMS41NjY2NjY3LDExLjI0IEwxNy41ODMzMzMzLDExLjI0IEwxNi42NzMzMzMzLDE2LjI5MjQgTDExLjU2NjY2NjcsMTYuMjkyNCBMMTEuNTY2NjY2NywzMS40NTk4IEw1Ljg5LDMxLjQ1OTggTDUuODksMTYuMjkyNCBMMC43NCwxNi4yOTI0IEwwLjc0LDExLjI0IEw1Ljg5LDExLjI0IEw1Ljg5LDguMjY4NCBDNS44OSw0LjAwNDggOC43OSwwLjU0MDIgMTIuNzcsMC41NDAyIEwxNy41OCwwLjU0MDIgTDE3LjU4LDUuOTE1NiBaIiBpZD0iZmFjZWJvb2siPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+) center no-repeat !important;
    }

    .entypo-hn {
      background: #ff6600 url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmb2N1c2FibGU9ImZhbHNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE3LjI3NSAxNy44MzR2Ny4xM2gtMi42MDJ2LTcuMTgyTDkgNy4wMzVoMy4wN2wyLjk2NyA2LjExNWMuMzY1Ljc1NS43MDIgMS41MS45ODggMi4zMTYuMzEyLS43MjguNjUtMS40ODMgMS4wNDItMi4yOWwzLjAxOC02LjE0MkgyM2wtNS43MjUgMTAuOHoiPjwvcGF0aD48L3N2Zz4=) center no-repeat;
    }

    .entypo-reddit {
      background: #ff4500 url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmb2N1c2FibGU9ImZhbHNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTTI4LjU0MyAxNS43NzRhMi45NTMgMi45NTMgMCAwIDAtMi45NTEtMi45NDkgMi44ODIgMi44ODIgMCAwIDAtMS45LjcxMyAxNC4wNzUgMTQuMDc1IDAgMCAwLTYuODUtMi4wNDRsMS4zOC00LjM0OSAzLjc2OC44ODRhMi40NTIgMi40NTIgMCAxIDAgLjI0LTEuMTc2bC00LjI3NC0xYS42LjYgMCAwIDAtLjcwOS40bC0xLjY1OSA1LjIyNGExNC4zMTQgMTQuMzE0IDAgMCAwLTcuMzE2IDIuMDI5IDIuOTA4IDIuOTA4IDAgMCAwLTEuODcyLS42ODEgMi45NDIgMi45NDIgMCAwIDAtMS42MTggNS40IDUuMTA5IDUuMTA5IDAgMCAwLS4wNjIuNzY1YzAgNC4xNTggNS4wMzcgNy41NDEgMTEuMjI5IDcuNTQxczExLjIyLTMuMzgzIDExLjIyLTcuNTQxYTUuMiA1LjIgMCAwIDAtLjA1My0uNzA2IDIuOTYzIDIuOTYzIDAgMCAwIDEuNDI3LTIuNTF6bS0xOC4wMDggMS44OGExLjc1MyAxLjc1MyAwIDAgMSAxLjczLTEuNzQgMS43MyAxLjczIDAgMCAxIDEuNzA5IDEuNzQgMS43MDkgMS43MDkgMCAwIDEtMS43MDkgMS43MTEgMS43MzMgMS43MzMgMCAwIDEtMS43My0xLjcxMXptOS41NjUgNC45NjhhNS41NzMgNS41NzMgMCAwIDEtNC4wODEgMS4yNzJoLS4wMzJhNS41NzYgNS41NzYgMCAwIDEtNC4wODctMS4yNzIuNi42IDAgMCAxIC44NDQtLjg1NCA0LjUgNC41IDAgMCAwIDMuMjM4LjkyN2guMDMyYTQuNSA0LjUgMCAwIDAgMy4yMzctLjkyNy42LjYgMCAxIDEgLjg0NC44NTR6bS0uMzMxLTMuMjU2YTEuNzI2IDEuNzI2IDAgMSAxIDEuNzA5LTEuNzEyIDEuNzE3IDEuNzE3IDAgMCAxLTEuNzEyIDEuNzEyeiIgZmlsbD0iI2ZmZiI+PC9wYXRoPjwvc3ZnPg==) center no-repeat;
    }

    .entypo-gplus {
      background: #e34429 url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Z29vZ2xlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imdvb2dsZSsiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJHb29nbGVfeDJCXyI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC45ODksNC41ODkgQzAuOTg5LDYuMDgzIDEuNDg4LDcuMTYxIDIuNDcxLDcuNzk0IEMzLjI3Nyw4LjMxNCA0LjIxMSw4LjM5MiA0LjY5Nyw4LjM5MiBDNC44MTUsOC4zOTIgNC45MSw4LjM4NiA0Ljk3Niw4LjM4MiBDNC45NzYsOC4zODIgNC44MjIsOS4zODYgNS41NjYsMTAuMzc4IEw1LjUzMiwxMC4zNzggQzQuMjQzLDEwLjM3OCAwLjAzOSwxMC42NDcgMC4wMzksMTQuMTA1IEMwLjAzOSwxNy42MjEgMy45LDE3LjggNC42NzUsMTcuOCBDNC43MzYsMTcuOCA0Ljc3MiwxNy43OTggNC43NzIsMTcuNzk4IEM0Ljc4LDE3Ljc5OCA0LjgzNSwxNy44IDQuOTMsMTcuOCBDNS40MjcsMTcuOCA2LjcxMiwxNy43MzggNy45MDUsMTcuMTU3IEM5LjQ1MywxNi40MDcgMTAuMjM4LDE1LjA5OCAxMC4yMzgsMTMuMjcyIEMxMC4yMzgsMTEuNTA4IDkuMDQyLDEwLjQ1OCA4LjE2OSw5LjY5IEM3LjYzNiw5LjIyMSA3LjE3NSw4LjgxNyA3LjE3NSw4LjQyNCBDNy4xNzUsOC4wMjQgNy41MTIsNy43MjMgNy45MzcsNy4zNDIgQzguNjI2LDYuNzI3IDkuMjc2LDUuODUgOS4yNzYsNC4xOTIgQzkuMjc2LDIuNzM1IDkuMDg3LDEuNzU2IDcuOTIyLDEuMTM1IEM4LjA0MywxLjA3MyA4LjQ3MywxLjAyOCA4LjY4NSwwLjk5OCBDOS4zMTYsMC45MTIgMTAuMjM5LDAuODE0IDEwLjIzOSwwLjI5OSBMMTAuMjM5LDAuMiBMNS42NCwwLjIgQzUuNTk0LDAuMjAyIDAuOTg5LDAuMzcyIDAuOTg5LDQuNTg5IFogTTguNDEzLDEzLjYwMiBDOC41MDEsMTUuMDA4IDcuMjk4LDE2LjA0NSA1LjQ5MSwxNi4xNzYgQzMuNjU2LDE2LjMxMSAyLjE0NiwxNS40ODUgMi4wNTgsMTQuMDggQzIuMDE1LDEzLjQwNCAyLjMxMiwxMi43NDQgMi44OTMsMTIuMjE3IEMzLjQ4MiwxMS42ODQgNC4yOTEsMTEuMzU0IDUuMTcxLDExLjI4OSBDNS4yNzUsMTEuMjgzIDUuMzc4LDExLjI3NyA1LjQ4MSwxMS4yNzcgQzcuMTgsMTEuMjc4IDguMzMsMTIuMjc2IDguNDEzLDEzLjYwMiBaIE03LjIxMiwzLjYyNiBDNy42NjMsNS4yMTQgNi45ODIsNi44NzIgNS44OTYsNy4xNzkgQzUuNzcxLDcuMjE0IDUuNjQzLDcuMjMxIDUuNTEyLDcuMjMxIEM0LjUxOCw3LjIzMSAzLjUzMyw2LjIyNSAzLjE2Nyw0LjgzOCBDMi45NjMsNC4wNjIgMi45OCwzLjM4IDMuMjE0LDIuNzI2IEMzLjQ0MywyLjA4MSAzLjg1NywxLjY0OCA0LjM3NywxLjUwMSBDNC41MDIsMS40NjYgNC42MzEsMS40NDggNC43NjIsMS40NDggQzUuOTYyLDEuNDQ4IDYuNzM0LDEuOTQ2IDcuMjEyLDMuNjI2IFogTTE1LDcgTDE1LDQgTDEzLDQgTDEzLDcgTDEwLDcgTDEwLDkgTDEzLDkgTDEzLDEyIEwxNSwxMiBMMTUsOSBMMTgsOSBMMTgsNyBMMTUsNyBaIiBpZD0iZ29vZ2xlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==) center no-repeat !important;
    }

    .entypo-twitter,
    .entypo-facebook,
    .entypo-hn,
    .entypo-reddit,
    .entypo-gplus {
      &:before {
        display: none;
      }
    }

    .entypo-twitter,
    .entypo-hn,
    .entypo-reddit {
      background-size: 30px auto !important;
    }

    .entypo-gplus {
      background-size: 20px auto !important;
    }

    .entypo-facebook {
      background-size: 14px auto !important;
    }

    &.share-button-top.sharer-0 .social {
      &.active.center {
        margin-left: -105px !important;
      }

      ul {
        background: none !important;
        min-width: 300px;

        &:after {
          border-top: 20px solid #ff6600 !important;
        }
      }
    }
  }

  .share-button.share-button-top.sharer-0 label {
    background: white !important;
    color: #FF886F !important;
  }

  @media all and (max-width: 499px) {
    .main, .container {
      margin: 0;
    }

    .navbar {
      height: initial;
    }
    .menu > ul > li {
      display: block;
      text-align: center;
    }
    .navbar .menu a { margin-left: 0; }
  }

  @media all and (min-width: 500px) {
    .project {
      float: left;
      width: 50%;
      padding-right: 24px;
    }
    .project:nth-of-type(n) { clear: none; }
    .project:nth-of-type(2n+1) { clear: both; }
  }

  @media all and (max-width: 700px) {
    .projects-sort-filter-toolbar {
      padding: 0 24px;
      margin-top: 36px;
      margin-bottom: 36px;
    }
    .projects-sort {
      float: none;
    }
    .projects-filters {
      float: none;
    }
    .projects-sort-filter-toolbar .dropdown {
      display: block;
      margin: 10px 0;
      width: 100%;
      height: 48px;
    }
    .projects-sort-filter-toolbar .dropdown:before, .dropdown:after {
      top: 19px;
    }
    .projects-sort-filter-toolbar .dropdown .dropdown-select {
      font-size: 16px;
      height: 48px;
      line-height: 48px;
    }
    .project {
      display: block;
      width: 100%;
      padding: 20px 20px 0;
    }
    .projects {
      margin-right: 0;
    }

    .show-headers .cards-header {
      padding: 0 20px;
    }
  }

  @media all and (max-width: 800px) {
    .navbar .container {
      padding: 0 12px;
    }
  }

  @media all and (min-width: 800px) {
    .project {
      float: left;
      width: 33.333333333%;
      padding-right: 24px;
    }
    .project:nth-of-type(n) { clear: none; }
    .project:nth-of-type(3n+1) { clear: both; }
  }

  @media all and (min-width: 1000px) {
    .project {
      float: left;
      width: 25%;
      padding-right: 24px;
    }
    .project:nth-of-type(n) { clear: none; }
    .project:nth-of-type(4n+1) { clear: both; }
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <Header/>
      <div className="content">
        <Routes />
      </div>
      <Footer/>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
