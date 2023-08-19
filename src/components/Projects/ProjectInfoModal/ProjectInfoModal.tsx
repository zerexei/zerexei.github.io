import GenericModal from '../../Includes/Modals/GenericModal';
import ModalFooter from './ModalFooter';
import ProjectShowcase from './ProjectShowcase';

export interface Tool {
  id: number;
  title: string;
}

const tools: Tool[] = [
  { id: 1, title: 'React' },
  { id: 2, title: 'Tailwind' },
  { id: 3, title: 'Typescript' },
];

const ProjectInfoModal = () => {
  return (
    <GenericModal>
      <ProjectShowcase />
      <ModalFooter
        title="Lorem Ipsum"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        tools={tools}
        viewProjectUrl="#"
      />
    </GenericModal>
  );
};

export default ProjectInfoModal;
