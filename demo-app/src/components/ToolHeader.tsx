import React, { FC } from 'react';

export interface ToolHeaderProps {
  headerText: string;
}

export const ToolHeader: FC<ToolHeaderProps> = (props) => {

  return <header className="page-header">
    <h1>{props.headerText}</h1>
  </header>;
};