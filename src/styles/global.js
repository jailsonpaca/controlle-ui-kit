import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'ProximaNovaRegular';
  }

  body {
    font-family: 'ProximaNovaRegular';
  }

  body.fontLoaded {
    font-family: 'ProximaNovaRegular';
  }

  #root {
    background-color: #f3f4f9;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'ProximaNovaRegular';
    line-height: 1.5em;
  }

  .ant-table-row:last-of-type:hover .ant-table-cell{
    border-bottom-left-radius:6px;
    border-bottom-right-radius:6px;
  }

  .ant-alert-with-description .ant-alert-message{
    margin-bottom: 0;
  }

  .ant-checkbox-checked .ant-checkbox-inner::after{
    display:none;
  }

  .ant-checkbox{
    .ant-checkbox-inner{
      border-radius: 1px
    }
  }

  .ant-skeleton-element{
    flex:1;
  }

  .ant-btn-text:hover, .ant-btn-text:focus{
    background-color: #f5f5f5;
  }

  .ant-form-item-children-icon{
    padding: 2px 12px;
    padding-right: 12px;
  }

   .ant-btn{
    box-shadow:none;
  }
  .ant-tooltip {
    .ant-tooltip-arrow{
      margin-bottom:-8px;
    }
    .ant-tooltip-inner{
      margin-bottom:-8px;
    }
  }
  .ant-form-item-explain {
      font-size:12px;
      line-height:1.3;
      margin-left:6px;
      margin-top:2px;
  }
`;
