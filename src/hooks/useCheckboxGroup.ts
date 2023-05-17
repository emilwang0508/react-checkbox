import { useState, useEffect } from 'react';
import { SelectAllBtnContent } from '@/components/CheckboxGroup';
const useCheckboxGroup = (
  options: string[],
  defaultChecked: string[],
  onChange: (checked: string[]) => void,
  showSelectAll?: boolean
) => {
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  const handleCheck = (option: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (option === SelectAllBtnContent) {
      if (e.target.checked) {
        setChecked(options);
      } else {
        setChecked([]);
      }
    } else {
      if (e.target.checked) {
        setChecked((prev) => [...prev, option]);
      } else {
        setChecked((prev) => prev.filter((item) => item !== option));
      }
    }
  };

  useEffect(() => {
    onChange(checked);
  }, [checked, onChange]);

  return {
    checked,
    handleCheck,
  };
};


export default useCheckboxGroup;
