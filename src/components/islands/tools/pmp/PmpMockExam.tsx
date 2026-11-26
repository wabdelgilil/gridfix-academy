import GenericExamRunner from '../common/GenericExamRunner';
import {
  mockPmpDomains,
  mockPmpDomainsEn,
  mockPmpQuestions,
} from '../../../../data/quiz/pmp/mock-pmp';

const sections = [1, 2, 3].map((id) => ({
  id,
  name: mockPmpDomains[id],
  nameEn: mockPmpDomainsEn[id],
}));

const questions = mockPmpQuestions.map((q) => ({
  ...q,
  sectionId: q.domain,
}));

export default function PmpMockExam() {
  return (
    <GenericExamRunner
      examCode="PMP"
      examTitle="محاكي امتحان PMP الشامل"
      examTitleEn="PMP Comprehensive Mock Exam"
      examDescription="180 سؤالاً مبنية على ECO يوليو 2026 وPMBOK 8، موزّعة على الأفراد 33% والعمليات 41% وبيئة الأعمال 26%. مزيج الأسئلة تنبؤي نحو 40% ورشيق/هجين نحو 60%، مع إيقاع 240 دقيقة واستراحتين 10 دقائق."
      examDescriptionEn="180 ECO-aligned questions based on the July 2026 ECO and PMBOK 8, split across People 33%, Process 41%, and Business Environment 26%. The mix is about 40% predictive and 60% agile/hybrid, with 240 minutes and two 10-minute breaks."
      sectionLabel="المجال"
      sectionLabelEn="Domain"
      questions={questions}
      sections={sections}
      countOptions={[20, 60, 120, mockPmpQuestions.length]}
      defaultCount={mockPmpQuestions.length}
      secondsPerQuestion={73}
      passThresholdPercent={70}
      storageCourseId="pmp"
    />
  );
}
