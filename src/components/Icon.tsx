import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try { importAll(require.context('icons', true, /\.svg$/)); } catch (error) { console.log(error); }

type Props = {
  fill: string;
  name: string
}

const Icon = (props: Props) => {
  return (
    <svg className="icon" aria-hidden="true">
      <use fill={props.fill} xlinkHref={'#' + props.name} />
    </svg>
  );
};

export default Icon;
