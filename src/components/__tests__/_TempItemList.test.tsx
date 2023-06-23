import { render } from '@/utils/testUtils';
import TempItemList from '@/components/_TempItemList';

// todo : 화면쪽 테스팅 코드 보완필요함.
describe('_TempItemList', () => {
  it('화면 랜더링 확인', async () => {
    render(<TempItemList />);
  });
});
