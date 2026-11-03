import GenericExamRunner from '../common/GenericExamRunner';
import { mockCamaQuestions, mockCamaVolumes, mockCamaVolumesEn } from '../../../../data/quiz/cama/mock-cama';

const sections = [1, 2, 3, 4, 5].map((id) => ({
  id,
  name: mockCamaVolumes[id],
  nameEn: mockCamaVolumesEn[id],
}));

const questions = mockCamaQuestions.map((q) => ({
  ...q,
  sectionId: q.volume,
}));

export default function CamaMockExam() {
  return (
    <GenericExamRunner
      examCode="CAMA"
      examTitle="محاكي امتحان CAMA الشامل"
      examTitleEn="CAMA Comprehensive Mock Exam"
      examDescription="محاكاة سيناريوهات معتمدة على مواصفة ISO 55001 ومجلدات GFMAM لإدارة الأصول بنظام التوقيت القياسي (80 ثانية لكل سؤال)."
      examDescriptionEn="Simulation scenarios based on ISO 55001 and GFMAM asset management landscape with standard exam timing (80s per question)."
      sectionLabel="المجلد"
      sectionLabelEn="Volume"
      questions={questions}
      sections={sections}
      countOptions={[10, 20, mockCamaQuestions.length]}
      defaultCount={mockCamaQuestions.length}
      secondsPerQuestion={80}
      storageCourseId="cama"
    />
  );
}
