import { useState } from "react";
import { ref, set, remove } from "firebase/database";
import { database } from "../Firebase/Firebase";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [imageKey, setImageKey] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageURL(reader.result);
    };
    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Selecciona una imagen");
      return;
    }

    setLoading(true);

    try {
      const validImageName = image.name
        .replace(/[.#$\\[\]]/g, "_")
        .replace(/\s+/g, "_");

      const uniqueImageId = Date.now() + "_" + validImageName;

      const imageBase64 = imageURL;

      const imageRefInDb = ref(database, 'images/' + uniqueImageId);
      await set(imageRefInDb, {
        url: imageBase64,
        name: image.name,
        createdAt: new Date().toISOString(),
      });

      setImageKey(uniqueImageId);

      alert("Imagen subida y guardada exitosamente");
    } catch (error) {
      console.error("Error subiendo la imagen: ", error);
      alert("Hubo un problema al subir la imagen. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!imageKey) {
      alert("No hay imagen para eliminar.");
      return;
    }

    setLoading(true);

    try {
      const imageRefInDb = ref(database, 'images/' + imageKey);
      await remove(imageRefInDb);

      setImageKey(null);
      setImageURL(null);
      setImage(null);

      alert("Imagen eliminada exitosamente");
    } catch (error) {
      console.error("Error eliminando la imagen: ", error);
      alert("Hubo un problema al eliminar la imagen. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Subir Imagen</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Cargando..." : "Subir Imagen"}
      </button>

      {imageURL && (
        <div>
          <img src={imageURL} alt="Preview" width={100} />
          <button onClick={handleDelete} disabled={loading}>
            {loading ? "Eliminando..." : "Eliminar Imagen"}
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
