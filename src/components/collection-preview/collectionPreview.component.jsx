import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collectionItem.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .map(({id, ...collectionProps}) => (
            <CollectionItem key={id} {...collectionProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
