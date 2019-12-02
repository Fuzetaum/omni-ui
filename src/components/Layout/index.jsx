import PropTypes from 'prop-types';
import React from 'react';

import {
  THEME_PRIMARY_COLOR_MEDIUM,
  THEME_PRIMARY_COLOR_DARK,
  THEME_PRIMARY_COLOR_TEXT,
} from '../../theme';

import './index.scss';

const Content = ({ children, style, ...remainingProps }) => {
  return (
    <main
      {...remainingProps}
      className="omni-ui-content"
      style={{
        ...style,
        backgroundColor: style.backgroundColor || 'rgb(240, 235, 233)',
      }}
    >
      {children}
    </main>
  );
};

Content.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

Content.defaultProps = {
  children: null,
  style: {},
};

const Footer = ({ children, style, ...remainingProps }) => {
  return (
    <>
      <footer
        {...remainingProps}
        className="omni-ui-footer"
        style={{
          ...style,
          backgroundColor: style.backgroundColor || THEME_PRIMARY_COLOR_DARK,
          color: style.color || THEME_PRIMARY_COLOR_TEXT,
        }}
      >
        {children}
      </footer>
      <div className="omni-ui-layout-shadow-box" />
    </>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

Footer.defaultProps = {
  children: null,
  style: {},
};

const Header = ({ children, style, ...remainingProps }) => {
  return (
    <header
      {...remainingProps}
      className="omni-ui-header"
      style={style}
    >
      <div className="omni-ui-layout-shadow-box" />
      <div
        className="omni-ui-header-content"
        style={{
          backgroundColor: style.backgroundColor || THEME_PRIMARY_COLOR_MEDIUM,
          color: style.color || THEME_PRIMARY_COLOR_TEXT,
        }}
      >{children}</div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

Header.defaultProps = {
  children: null,
  style: {},
};

const SideMenu = ({
  children,
  collapsed,
  style,
  ...remainingProps
}) => {
  return (
    <aside
      {...remainingProps}
      className={`omni-ui-side-menu ${collapsed ? 'omni-ui-side-menu-collapsed' : ''}`}
      style={style}
    >
      <div className="omni-ui-layout-shadow-box" />
      <div
        className="omni-ui-side-menu-content"
        style={{
          backgroundColor: style.backgroundColor || THEME_PRIMARY_COLOR_MEDIUM,
          color: style.color || THEME_PRIMARY_COLOR_TEXT,
        }}
      >{children}</div>
    </aside>
  );
};

SideMenu.propTypes = {
  children: PropTypes.node,
  collapsed: PropTypes.bool,
  style: PropTypes.object,
};

SideMenu.defaultProps = {
  children: null,
  collapsed: false,
  style: {},
};

const Layout = ({ children, style, ...remainingProps }) => {
  const hasSideMenu = !!children.find(node => node.type.name === 'SideMenu');

  return (
    <section
      className={`omni-ui-layout-${hasSideMenu ? 'horizontal' : 'vertical'}`}
      style={style}
      {...remainingProps}
    >
      {Array.from(children).reverse()}
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

Layout.defaultProps = {
  children: null,
  style: {},
};

Layout.Content = Content;
Layout.Footer = Footer;
Layout.Header = Header;
Layout.SideMenu = SideMenu;

export default Layout;
