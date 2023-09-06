import { useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";

function useGetDocumentById(collection, id) {
    const [document, setDocument] = useState(null);

    useEffect(() => {
      const db = getFirestore();
  
      const documentRef = doc(db, collection, id);
      getDoc(documentRef).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          const documento = {
            id: snapshot.id,
            ...data,
          };
  
          setDocument(documento);
        }
      }).catch((err) => console.error(err));
  
    }, []);

    return { document };
}

export default useGetDocumentById;