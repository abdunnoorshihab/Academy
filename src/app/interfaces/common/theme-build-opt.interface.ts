export interface ThemeBuildOpt {
  _id?: string;
  title?: string;
  icon?: string;
  timeInSec?: number;
  status?: 'pending' | 'working' | 'completed';
}
