import GenericExamRunner from '../common/GenericExamRunner';
import { mockCmrpQuestions, mockCmrpPillars, mockCmrpPillarsEn } from '../../../../data/quiz/cmrp/mock-cmrp';

const sections = [1, 2, 3, 4, 5].map((id) => ({
  id,
  name: mockCmrpPillars[id],
  nameEn: mockCmrpPillarsEn[id],
}));

const questions = mockCmrpQuestions.map((q) => ({
  ...q,
  sectionId: q.pillar,
}));

export default function CmrpMockExam() {
  return (
    <GenericExamRunner
      examCode="CMRP"
      examTitle="محاكي امتحان CMRP الشامل"
      examTitleEn="CMRP Comprehensive Mock Exam"
      examDescription="أسئلة سيناريو واقعية تحاكي معايير SMRP الرسمية وتغطي كافة محاور موثوقية الأصول الخمسة بإيقاع زمني متطابق مع الامتحان الفعلي (80 ثانية لكل سؤال)."
      examDescriptionEn="Real-world scenario questions aligned with SMRP standards across all 5 reliability pillars with real exam timing (80s per question)."
      sectionLabel="المحور"
      sectionLabelEn="Pillar"
      questions={questions}
      sections={sections}
      countOptions={[20, 50, mockCmrpQuestions.length]}
      defaultCount={20}
      secondsPerQuestion={80}
      storageCourseId="cmrp"
    />
  );
}
