export default function KnowledgeBlock({itemList, title}: {itemList: Array<string>, title: string}) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {itemList.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
