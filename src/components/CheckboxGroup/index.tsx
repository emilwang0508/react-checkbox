import React, { useState, useEffect } from 'react';
import styles from './checkbox.module.css';
import useCheckboxGroup from '@/hooks/useCheckboxGroup';

export const SelectAllBtnContent: string = 'Select All';
interface CheckboxGroupProps {
  options: string[]; // 选项的名字。
  defaultChecked: string[]; // 默认被选中的选项。
  columns: number; // 表示展示的列数。
  onChange: (checked: string[]) => void; // 当选项被选中或取消选中时被调用，参数为所有被选中的选项。
  showSelectAll?: boolean
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, defaultChecked, columns, onChange,  showSelectAll = false, }) => {

  const optionsWithSelectAll = showSelectAll ? [SelectAllBtnContent, ...options] : options;
  const { checked, handleCheck } = useCheckboxGroup(options, defaultChecked, onChange);
  const colStyle = {
    width: `${100 / columns < options.length ? columns : options.length}%`,
    height: '30px',
    minWidth: '100px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const groups = [];
  for (let i = 0; i < optionsWithSelectAll.length; i += columns) {
    groups.push(optionsWithSelectAll.slice(i, i + columns));
  }
  return (
    <div className={styles.checkboxContainer}>
      {groups.map((group, i) => (
        <div key={i} style={{ display: 'flex' }}>
          {group.map((option) => (
            <label key={option} style={{...colStyle, whiteSpace: "nowrap"}}>
              <input
                type="checkbox"
                checked={checked.includes(option) || checked.length === options.length}
                onChange={handleCheck(option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
