import { useState } from 'react';

// import projects from '../../../assets/projects.json';
import ProjectInfoModal from '@Components/Pages/Projects/ProjectInfoModal/ProjectInfoModal';

type Project = {
  id: number;
  title: string;
  description: string;
  tools: string[];
  images: string[];
  url: string;
};
const projects = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    description:
      'Semper auctor neque vitae tempus quam pellentesque nec nam. Imperdiet sed euismod nisi porta lorem. Nec feugiat in fermentum posuere urna nec.',
    tools: ['laravel', 'vue', 'tailwindcss'],
    images: [''],
    url: '#',
  },
];
projects.push(projects[0]);
projects.push(projects[0]);
projects.push(projects[0]);
projects.push(projects[0]);
projects.push(projects[0]);
projects.push(projects[0]);
projects.push(projects[0]);
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

// import {
//   firebase_apiKey,
//   firebase_authDomain,
//   firebase_projectId,
//   firebase_storageBucket,
//   firebase_messagingSenderId,
//   firebase_appId,
// } from '@/config';

const Projects = () => {
  //   useEffect(() => {
  //     fetchProjects();
  //   }, []);

  //   // Your web app's Firebase configuration
  //   const firebaseConfig = {
  //     apiKey: firebase_apiKey,
  //     authDomain: firebase_authDomain,
  //     projectId: firebase_projectId,
  //     storageBucket: firebase_storageBucket,
  //     messagingSenderId: firebase_messagingSenderId,
  //     appId: firebase_appId,
  //   };

  //   // Initialize Firebase
  //   const app = initializeApp(firebaseConfig);
  //   // Initialize Cloud Firestore and get a reference to the service
  //   const db = getFirestore(app);

  //   async function fetchProjects() {
  //     const docRef = collection(db, 'users');
  //     const docSnap = await getDocs(docRef);

  //     if (!docSnap.empty) {
  //       docSnap.forEach((doc) => {
  //         console.log(doc.id, ' => ', doc.data());
  //       });
  //     } else {
  //       // docSnap.data() will be undefined in this case
  //       console.log('No such document!');
  //     }
  //   }

  //   async function log() {
  //     try {
  //       const docRef = await addDoc(collection(db, 'users'), {
  //         first: 'Ada',
  //         last: 'Lovelace',
  //         born: 1815,
  //       });
  //       console.log('Document written with ID: ', docRef.id);
  //     } catch (e) {
  //       console.error('Error adding document: ', e);
  //     }
  //   }

  const [projectSelected, setProjectSelected] = useState<Project | null>(null);

  const updateProjectSelected = (project: Project) => {
    setProjectSelected(project);
  };

  const removeProjectSelected = () => {
    setProjectSelected(null);
  };

  return (
    <section id="projects" className="pt-6 pb-12">
      <div>
        <h2 className="mb-12 text-2xl font-bold tracking-tight text-center sm:text-4xl text-primary">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project: Project) => {
            return (
              <div
                onClick={() => updateProjectSelected(project)}
                key={project.id}
                className="group/project p-2 min-h-[15rem] cursor-pointer"
              >
                <div className="flex flex-col w-full h-full p-4 border border-transparent rounded-md shadow-md dark:border-gray-500 group-hover/project:bg-gray-800 dark:shadow-gray-800 group-hover/project:text-white">
                  <div className="flex-1 mb-6">
                    <h5 className="mb-2 text-2xl font-semibold ">
                      {project.title}
                    </h5>
                    <p className='text-sm text-slate-400'>{project.description}</p>
                  </div>
                  <div className="flex flex-wrap items-end gap-2 ">
                    {project.tools.slice(0, 5).map((tool, index) => {
                      return (
                        <span
                          key={index}
                          className="whitespace-nowrap text-xs px-4 pb-.5 font-bold text-red-400 border border-red-400 rounded-full"
                        >
                          {tool}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {projectSelected && (
        <ProjectInfoModal
          project={projectSelected}
          close={removeProjectSelected}
        />
      )}
    </section>
  );
};

export default Projects;
