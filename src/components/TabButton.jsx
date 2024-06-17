export function TabButton({ children, onSelect, isSelected }) {
  let classBtn = isSelected ? 'active' : '';
     return (
       <button className={classBtn} onClick={onSelect}>{children}</button>
     )
   }