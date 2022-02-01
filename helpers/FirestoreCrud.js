// import { collection, addDoc, getDocs, deleteDoc, doc, getDoc, query, where } from "firebase/firestore";
// import {db} from '../credencialesFirebase'

const { collection, addDoc, getDocs, deleteDoc, doc, getDoc, query, where } = require('firebase/firestore');
const {db} = require('../credencialesFirestore');

async function agregarFirebase(alumno) {
   try {
      
     const docRef = await addDoc(collection(db, "alumnos"), alumno);
     
     return docRef
   } catch (e) {
     console.error("Error adding document: ", e);
   }
 }
 
 
 // Obtener
 async function obtenerFirebase() {
   const querySnapshot = await getDocs(collection(db, "alumnos"));
   let alumnos = [];
 
   querySnapshot.forEach((doc) => {
     let alumno = doc.data();
     alumno.id = doc.id;
     // doc.data() is never undefined for query doc snapshots
     // return doc.data(doc.data())
     alumnos.push(alumno)  
   });
   return alumnos
 }
 
 
 // Eliminar
 async function borrarFirestore(id) {
   console.log(id);
   await deleteDoc(doc(db, "alumnos", id));
 
   console.log(`Alumno borrado ${id}`)
 }
 
 // Obtener un solo alumno
 async function obtenerUnAlumnoFirebase(nombre) {
   let alumnos = [];
   let todosLosAlumnos = await obtenerFirebase();
 
   alumnos = todosLosAlumnos.filter(alumno => {
     const nombreLower = alumno.nombre.toLowerCase()
     
     if (nombreLower.includes(nombre.toLowerCase())) {
       return alumno
     } 
   })
   // const alumnosRef = collection(db, "alumnos");
   // const q = query(alumnosRef, where("nombre", "==", nombre));
   // const querySnapshot = await getDocs(q);
 
   // querySnapshot.forEach((doc) => {
   //   let alumno = doc.data();
   //   alumno.id = doc.id;
     
   //   alumnos.push(alumno)  
     
   // });
 
   return alumnos
 }
 
 
 module.exports =  {agregarFirebase, obtenerFirebase,borrarFirestore,obtenerUnAlumnoFirebase};
 