import GenericModal from '@Components/Includes/Modals/GenericModal';
import ModalFooter from '@Components/Pages/Projects/ProjectInfoModal/ModalFooter';
import ProjectShowcase from '@Components/Pages/Projects/ProjectInfoModal/ProjectShowcase';

const ProjectInfoModal = ({ project, close }) => {
  return (
    <GenericModal>
      <ProjectShowcase images={project.images} />
      <ModalFooter
        title={project.title}
        description={project.description}
        tools={project.tools}
        viewProjectUrl={project.url}
        close={close}
      />
    </GenericModal>
  );
};

export default ProjectInfoModal;
