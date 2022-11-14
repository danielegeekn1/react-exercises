import { useMemo } from "react";

const FilteredList = ({ objectList }) => {
  const teenagers = useMemo(() => {
    return objectList.filter((user) => user.age > 18);
  }, [objectList]);
  return (
    <div>
      <ul>
        {teenagers.map((user, i) => (
          <li key={i}>{user.age}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
