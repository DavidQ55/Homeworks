import { useEffect, useState } from "react";
import { ref, remove, onValue } from "firebase/database";
import { database } from "../Firebase/Firebase";
import styles from "./gallery.module.css"

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagesRef = ref(database, 'images');

    const unsubscribe = onValue(imagesRef, (snapshot) => {
      if (snapshot.exists()) {
        const imagesData = snapshot.val();
        setImages(Object.entries(imagesData).map(([key, value]) => ({ ...value, id: key })));
      } else {
        console.log("No hay imágenes");
        setImages([]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleDelete = async (imageId) => {
    try {
      const imageRefInDb = ref(database, 'images/' + imageId);
      await remove(imageRefInDb);
      alert("Imagen eliminada exitosamente");
    } catch (error) {
      console.error("Error eliminando la imagen: ", error);
      alert("Hubo un problema al eliminar la imagen. Inténtalo de nuevo.");
    }
  };

  return (
    <div>
      <h2>Galería de Imágenes</h2>
      <div>
        {images.length === 0 ? (
          <p>No hay imágenes disponibles.</p>
        ) : (
          images.map((image ) => (
            <div className={styles["image-item"]} key={image.id}>
              <img className={styles["image-item img"]} src={image.url} alt={image.name} width={100} />
              <p>{image.name}</p>
              <button onClick={() => handleDelete(image.id)}>Eliminar</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ImageGallery;