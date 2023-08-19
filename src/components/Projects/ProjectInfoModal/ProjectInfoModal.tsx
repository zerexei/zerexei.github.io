import GenericModal from '../../Includes/Modals/GenericModal';
import ModalFooter from './ModalFooter';
import ProjectShowcase from './ProjectShowcase';

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
