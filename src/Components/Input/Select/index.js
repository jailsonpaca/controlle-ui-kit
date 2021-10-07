import React from 'react';
import { Select } from 'antd';
import { ArrowDown } from 'assets/CustomIcons';
import { COLORS } from 'styles';

const SelectControlle = ({ ...props }) => <Select suffixIcon={<ArrowDown color={COLORS.darkBlueGrey} />} {...props} />;

export default SelectControlle;
