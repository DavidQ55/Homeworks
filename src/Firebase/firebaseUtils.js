import { ref, deleteObject } from "firebase/storage";
import { storage } from "./Firebase";

/**
 * @param {string} imagePath - La ruta de la imagen en Firebase Storage.
 */
export const deleteImageFromFirebase = async (imagePath) => {
    const imageRef = ref(storage, imagePath);

    try {
        await deleteObject(imageRef);
        console.log("Imagen eliminada exitosamente");
    } catch (error) {
        console.error("Error al eliminar la imagen: ", error);
    }
};
