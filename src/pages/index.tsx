import { useState } from 'react';
import CheckboxGroup from '@/components/CheckboxGroup'


export default function Home() {
  const options = ['Apple', 'Banana', 'Orange', 'Watermelon', 'Grape', 'Strawberry'];
  const defaultChecked = ['Apple', 'Orange'];
  const handleChange = (checked: string[]) => {
    console.log('当前选中的选项：', checked);
  };
  const [columns, setColumns] = useState<number>(3);
  const handleColumnsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 0) {
      setColumns(value);
    }
  };
  return (
    <>
      <h1 style={{textAlign: 'center'}}>复选框组件示例</h1>
      <main
        style={{border: '1px solid #ccc'}}
        className={`flex flex-col items-center justify-between m-1 p-10`}
      >

        <CheckboxGroup
          options={options}
          defaultChecked={defaultChecked}
          columns={columns}
          onChange={handleChange}
          showSelectAll={true}
           />
      </main>
      <div style={{textAlign: 'center'}}>
        <label>
            Columns:
            <input
              type="number"
              value={columns}
              max={options.length + 1}
              onChange={handleColumnsChange}
              style={{border:'1px solid #000'}}
               />
        </label>
      </div>
    </>
  )
}
